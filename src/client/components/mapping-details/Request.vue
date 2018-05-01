<template>
    <div>
        <h4>Request</h4>
        <hr>
        {{ request }}
        <b-container>
            <b-row>
                <b-form-group
                        id="pathMatcher"
                        label="Path Matcher"
                        label-for="pathMatcher">
                    <b-form-select id="requestPathMatcher" :state="!$v.form.pathMatcher.$invalid" v-model="form.pathMatcher">
                        <option value="url">URL</option>
                        <option value="urlPattern">URL Pattern</option>
                        <option value="urlPath">URL Path</option>
                        <option value="urlPathPattern">URL Path Pattern</option>
                    </b-form-select>
                </b-form-group>
                <b-form-group
                        id="path"
                        label="Path"
                        label-for="requestPath">
                    <b-form-input id="requestPath" :state="!$v.form.path.$invalid" v-model="form.path"></b-form-input>
                    <b-form-invalid-feedback>
                        Path is required
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                        id="method"
                        label="Method"
                        label-for="pathMatcher">
                    <b-form-select id="requestMethod" :state="!$v.form.method.$invalid" v-model="form.method">
                        <option value="GET">GET</option>
                        <option value="HEAD">HEAD</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                        <option value="CONNECT">CONNECT</option>
                        <option value="OPTIONS">OPTIONS</option>
                        <option value="TRACE">TRACE</option>
                        <option value="PATCH">PATCH</option>
                    </b-form-select>
                </b-form-group>
            </b-row>
            <b-row>
                <b-row class="full-width space-between">
                    <h4>Headers</h4>
                    <div>
                        <b-btn variant="primary" @click="addHeader">Add</b-btn>
                        <b-btn v-b-toggle.headersCollapse variant="primary">Toggle</b-btn>
                    </div>
                </b-row>
                <b-collapse id="headersCollapse" ref="headersCollapse">
                    <wv-key-value-matcher v-for="header in headers" v-bind:key="key" v-bind:value="value"></wv-key-value-matcher>
                </b-collapse>
            </b-row>
            <b-row>
                <b-row class="full-width space-between">
                    <h4>Query Parameters</h4>
                    <div>
                        <b-btn variant="primary" @click="addQuery">Add</b-btn>
                        <b-btn v-b-toggle.queryCollapse variant="primary">Toggle</b-btn>
                    </div>
                </b-row>
                <b-collapse id="queryCollapse" ref="queryCollapse">
                    <wv-key-value-matcher v-for="queryParam in queryParams" v-bind:key="key" v-bind:value="value"></wv-key-value-matcher>
                </b-collapse>
            </b-row>
            <b-row>
                <b-row class="full-width space-between">
                    <h4>Cookies</h4>
                    <div>
                        <b-btn variant="primary" @click="addCookie">Add</b-btn>
                        <b-btn v-b-toggle.cookieCollapse variant="primary">Toggle</b-btn>
                    </div>
                </b-row>
                <b-collapse id="cookieCollapse" ref="cookieCollapse">
                    <wv-key-value-matcher v-for="cookie in cookies" v-bind:key="key" v-bind:value="value"></wv-key-value-matcher>
                </b-collapse>
            </b-row>
            <b-row>
                <b-form-group
                        id="payload"
                        label="Payload"
                        label-for="requestPayload">
                    <b-form-textarea id="requestPayload" :state="!$v.form.payload.$invalid" v-model="form.payload"></b-form-textarea>
                </b-form-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import WvKeyValueMatcher from './KeyValueMatcher'

  function keyValueMap ([key, value]) {
    // TODO account for matcher
    return { key, value }
  }

  export default {
    components: {
      WvKeyValueMatcher
    },
    created () {
      if (this.request && this.request.cookies) {
        this.cookies =  this.request.cookies.map(keyValueMap)
      }
      if (this.request && this.request.headers) {
        this.headers =  this.request.header.map(keyValueMap)
      }
      if (this.request && this.request.queryParameters) {
        this.queryParams = this.request.queryParameters.map(keyValueMap)
      }
    },
    data () {
      return {
        cookies: [],
        headers: [],
        queryParams: [],
        form: {}
      }
    },
    methods: {
      addCookie (event) {
        this.$refs.cookieCollapse.show = true
        this.cookies.push({})
      },
      addHeader (event) {
        this.$refs.headersCollapse.show = true
        this.headers.push({})
      },
      addQuery (event) {
        this.$refs.queryCollapse.show = true
        this.queryParams.push({})
      }
    },
    mixins: [
      validationMixin
    ],
    props: ['request'],
    validations: {
      form: {
        path: {
          required
        },
        pathMatcher: {
          required
        },
        payload: {},
        method: {
          required
        }
      }
    }
  }
</script>

<style scoped>

</style>