<template>
  <div>
      <h3>{{isNew?'创建':'编辑'}}视频</h3>
      <ele-form
      :form-data="data"
      :form-desc="fields"
      :request-fn="submit"
      ></ele-form>
      
  </div>
</template>

<script lang="ts">
import { log } from "util";
import { Vue , Component,Prop } from "vue-property-decorator";


@Component({})
export default class CourseEdit extends Vue{
  @Prop(String) id!:string
  data = {};
  fields = {
    name:{label:"名称",type:"input"},
    cover:{label:"封面图",type:"input"}
  }

  // async fetch () {
  //   const res = await this.$http.get('courses')
  //   this.data = res.data
  // }
  async submit(data){
    await this.$http.post('courses',data)
    this.$message.success('保存成功')
    this.$router.go(-1)
  }
  created(){
    // this.fetch()
  }
  get isNew(){
    return !this.id
  }
}
</script>

<style >

</style>