import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';

const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.register({
      // storage:
      // dest:"uploads"
      storage: MAO({
        config: {
            region: 'oss-cn-hangzhou',
            accessKeyId: 'LTAI4GJGFc59Hm3Vxx26f8Ew',
            accessKeySecret: 'F9WfqD8rO4HmPJQwdgJ2hr67iPYQ16',
            bucket: 'jiuer-shipin'
        }
      })
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
