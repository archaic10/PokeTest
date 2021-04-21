import {Request, response, Response} from 'express';
class PokeController{
    async attack(request:Request, response:Response){
        let {attack, defense}  = request.body;
        
        if(Number(defense.lyfe) < 0 ||Number(attack.power) <= 0){
            return response.status(422).send("[]");
        }

        if(attack.type == "normal" && defense.type == "flying"){
            return response.status(422).send("[]");
        }

        defense.lyfe =  Number(defense.lyfe) - Number(attack.power);
        response.json({attack,defense});
    }
}
export {PokeController}; 