// export class Product{
//     id:String;
//     title:String;
//     description:String;
//     price:number;

//     constructor  (id:String,title:String,description:String,price:number){
//             this.id = id;
//             this.title = title;
//             this.description = description;
//             this.price = price;
//     }
// }

export class Product{
    constructor  (
        public id:String,
        public title:String,
        public description:String,
        public price:number){         
    }
}
