import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SubcategoryModule } from './modules/subcategory/subcategory.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/YTY'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      
    }),
    CategoryModule,SubcategoryModule,AuthModule, UserModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
