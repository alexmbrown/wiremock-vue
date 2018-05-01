<template>
    <b-modal title="Add Server" id="addServerModal" ok-title="Add Server" :ok-disabled="$v.form.$invalid" @ok="onAddServer">
        <b-form-group
                id="name"
                label="Name"
                label-for="serverName">
            <b-form-input id="serverName" :state="!$v.form.name.$invalid" v-model="form.name"></b-form-input>
            <b-form-invalid-feedback>
                Name is required
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
                id="address"
                label="Address"
                label-for="serverAddress">
            <b-form-input id="serverAddress" :state="!$v.form.address.$invalid" v-model="form.address"></b-form-input>
            <b-form-invalid-feedback>
                <template v-if="!$v.form.address.required">
                    Address is required
                </template>
                <template  v-else>
                    Address is invalid
                </template>
            </b-form-invalid-feedback>
        </b-form-group>
    </b-modal>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import url from '../../common/utils/validators/url.validator'

  export default {
    data () {
      return {
        form: {}
      }
    },
    methods: {
      onAddServer () {
        this.$emit('add-server', this.form)
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        address: {
          required,
          url
        },
        name: {
          required
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .invalid-feedback {
        text-align: right;
    }
</style>