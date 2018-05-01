import { withParams } from 'vuelidate'
import * as validUrl from 'valid-url'

export default withParams({type: 'url'}, value => value && !!validUrl.isUri(value))
