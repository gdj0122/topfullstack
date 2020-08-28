declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import vue from 'vue';
import {AxiosInstance} from 'axios'
declare module 'vue-types-vue' {
  interface Vue {
    $http : AxiosInstance
  }
}