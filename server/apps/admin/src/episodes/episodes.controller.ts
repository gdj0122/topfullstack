import { Controller,Get } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
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
        @InjectModel(Episode) private model: ReturnModelType<typeof Episode>
    ){}

    @Get('option')
    option(){
        return{
        title: '视频编辑',
        column:[
                {prop:"name",label:"视频名称"},
                // {prop:"cover",label:"视频封面图"},
            ]
        }
    }
}
