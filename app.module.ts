import { Module } from '@nestjs/common';
import { productModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [productModule,TypeOrmModule.forRoot(
    {
      type: 'postgres',

      host: 'localhost',

      port: 5432,

      username: 'postgres',

      password: 'tiger',

      database: 'rudro',

      autoLoadEntities:true,

      synchronize: true,
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
