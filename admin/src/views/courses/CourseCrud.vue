<template>
  <div>
    <avue-crud :data="data.data" :option="option">

    </avue-crud>
      
  </div>
</template>

<script lang="ts">
import { Vue , Component } from "vue-property-decorator";


@Component({})
export default class CourseList extends Vue{

  data = {};
  // fields = {
  //   _id:{label:'ID'},
  //   name:{label:"名称"},
  //   cover:{label:"封面图"}
  // }
  option = {
    title:"课程管理",
    column:[
      {propo:"name",label:"视频名称"},
      {propo:"cover",label:"视频封面图"},
    ]
  }
  async fetch () {
    const res = await this.$http.get('courses')
    this.data = res.data
  }
  async remove(row){
    try{
      await this.$confirm("是否确认删除")
    } catch(e){
      return
    }
    await this.$http.delete(`courses/${row._id}`)
    this.$message.success("删除成功")
    this.fetch()
  }
  created(){
    this.fetch()
  }
}
</script>

<style >

</style>