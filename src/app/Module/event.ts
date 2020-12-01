export class Event {
    title : string;
    organisateur: string;
    description : string;
    dateDEBUT : Date;
    dateFIN : Date;


    constructor(title: string, organisateur: string, description: string, dateDEBUT : Date, dateFIN : Date){
        this.title = title;
        this.organisateur = organisateur;
        this.description = description;
        this.dateDEBUT = dateDEBUT;
        this.dateFIN = dateFIN;
    }

    /*getTile() : string{
        return this.title
    }
    setTitle(title : string){
        this.title = title;
    }

    setOrganisateur(organisateur :  string)
    {
        this.organisateur=organisateur;
    }
    getOrganisateur(organisateur:string)
    {
        return this.organisateur;
    }

    getDescription(description:string)
    {
        return this.description;
    }
    setDescription(description:string){
        this.description=description;
    }
    
    getDatedebut(dateDEBUT : Date){
        return this.dateDEBUT;
    }
    setDatedebut(dateDEBUT: Date){
        this.dateDEBUT= dateDEBUT;
    }

    getDatefin(dateFIN : Date){
        return this.dateFIN;
    }
    setDatefin(dateFIN: Date){
        this.dateFIN= dateFIN;
    }*/
}
