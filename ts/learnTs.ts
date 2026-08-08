let userName : string = "Arun";
// const user : {
//   id : number;
//   name : string;
//   email : string;
// } ={
//   id :  1,
//   name : "Arun",
//   email : "arun@"
// };

function greet(name :string) :string {
  return "Hello " + name;
}

const age:number = 25;

const isLoggedIn:boolean = true;

type User = {
    id : number;
    name : string;
    email : string;
    isActive : boolean;
    password : string;
    role : "admin" | "user" | "guest";
}
const user : User = {
    id : 1,
    name : "Arun",
    email : "arun@",
    isActive : true,
    password : "12345",
    role : "admin"
}

 type Role  = "admin" | "user" | "guest";

const userRole : Role = "admin";
console.log(userRole);


type Status = "idle" | "loading" | "sucess" | "error";
const currentStatus : Status = "loading";
console.log(currentStatus);

type fetchState = 
| {
         status: "idle"
}|
{
  status : "loading"
}|
{
  status : "success",
  data : User
}|
{
  status : "error",
  error : string
}

const fetchData : fetchState = {
  status : "success",
  data : user
}
 function dispatchEvent(event : fetchState) {
    if(event.status === "success") {
        console.log("Data fetched successfully", event.data);
    } else if(event.status === "error") {
        console.log("Error fetching data", event.error);
    } else if(event.status === "loading") {
        console.log("Data is loading...");
    } else if(event.status === "idle") {
        console.log("Fetch is idle.");
    }
 }


 function lastElement<T>(arr : T[]): T | undefined{
      return arr[arr.length - 1];
 }
 const lastNum = lastElement([1,2,3,4]);
 const lastStr = lastElement(["a","b","c"]);
 console.log(lastNum);
 console.log(lastStr);

 type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};
type partialProduct = Partial<Product>;
const product : partialProduct = {
  id: 1,
  name: "Laptop",
};
type PublicUser = Pick<User, "id" | "name" | "email">;
const publicUser : PublicUser = {
  id: 1,
  name: "Arun",
  email: "arun@"
};
type CreateProduct = Omit<Product, "id">;
const newProduct : CreateProduct = {
  //id : 2,
  name: "Smartphone",
  price: 699,
  inStock: true,
}

type ProductStatus = "stock" | "out-of-stock"

const ProductStock  : Record <ProductStatus, string> = {
      stock : "Product is in stock",
      "out-of-stock" : "Product is out of stock"
};
function ProductStatusMessage(status : ProductStatus) : string {
  return ProductStock[status];
}
console.log(ProductStatusMessage("stock"));
console.log(ProductStatusMessage("out-of-stock"));