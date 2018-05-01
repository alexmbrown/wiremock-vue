<template>
    <div>
        <h4>Response</h4>
        <hr>
        {{ response }}
        <b-container>
            <b-row>
                <b-form-group
                        id="status"
                        label="Status"
                        label-for="responseStatus">
                    <b-form-input id="responseStatus" :state="!$v.form.status.$invalid" v-model="form.status"></b-form-input>
                    <b-form-invalid-feedback>
                        Status is required
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                        id="priority"
                        label="Priority"
                        label-for="responsePriority">
                    <b-form-input id="responseStatus" :state="!$v.form.priority.$invalid" v-model="form.priority"></b-form-input>
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
    return { key, value }
  }

  export default {
    components: {
      WvKeyValueMatcher
    },
    created () {
      if (this.request && this.request.headers) {
        this.headers =  this.request.header.map(keyValueMap)
      }
    },
    data () {
      return {
        headers: [],
        form: {}
      }
    },
    methods: {
      addHeader (event) {
        this.$refs.headersCollapse.show = true
        this.headers.push({})
      }
    },
    mixins: [
      validationMixin
    ],
    props: ['response'],
    validations: {
      form: {
        status: {
          required
        },
        payload: {},
        priority: {}
      }
    }
  }
</script>

<style scoped>

</style>