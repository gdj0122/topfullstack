import Vue from 'vue'
import {AxiosInstance} from 'axios'

declare module 'vue/types/vue'{
  interface Vue{
     $http:AxiosInstance
  }
}
declare module 'vue-ele-form' {}