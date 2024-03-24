import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    console.log('App Module')
  }
}
