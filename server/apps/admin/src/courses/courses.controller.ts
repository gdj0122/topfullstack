import { Controller,Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Course
})
@Controller('courses')
@ApiTags('视频')
export class CoursesController {
    constructor(
        @InjectModel(Course) private model: ReturnModelType<typeof Course>
    ){}

    @Get('option')
    option(){
        return{
        title:"视频管理",
        column:[
                {prop:"name",label:"视频名称"},
                {prop:"cover",label:"视频封面图"},
            ]
        }
    }
}
