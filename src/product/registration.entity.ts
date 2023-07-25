import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';




@Entity("user")

    export class UserEntity{

       

        @PrimaryGeneratedColumn()

        id:number;




        @Column()

        name:string;




        @Column()

        password:string;




        @Column()

        email:string;




        @Column()

        nid:string;




        @Column()

        phone:string;




        @Column()

        address:string;

    }