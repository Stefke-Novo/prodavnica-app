import { Proizvod } from "../proizvod/proizvod";

export default class PersonalizovanaKategorija{
    public key:String;
    public id:number;
    public naziv:String;
    public proizvodi:Proizvod[];
    constructor(key:String,id:number,naziv:String,proizvodi:Proizvod[]){
        this.key=key;
        this.id=id;
        this.naziv=naziv;
        this.proizvodi=proizvodi;
    }
}