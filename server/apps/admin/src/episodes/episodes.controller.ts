import { Controller,Get } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
import { Course } from '@libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel} from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Episode
})
@Controller('episodes')
@ApiTags("集数")
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel:ReturnModelType<typeof Course>
    ){}

    @Get('option')
    async option(){
        const courses = (await this.courseModel.find()).map(v=>({
            label:v.name,
            value:v._id
        }))
        return{
        title: '视频编辑',
        translate:false,
        column:[
                {prop:"course",label:"所属视频",type:"select",row:true,dicData:courses},
                {prop:"name",label:"视频集数",span:24,row:true},
                {prop:"file",label:"视频文件",span:24,type:"upload",action:"/upload"},
            ]
        }
    }
}
