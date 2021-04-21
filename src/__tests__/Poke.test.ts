import request from 'supertest';
import { app } from '../app';

describe("Attack", ()=>{
    it("Return 200", async()=>{
        const response = await  request(app).post("/api/v1/Attack")
        .send({
            attack: {
                type: "flying",
                lyfe: "100",
                power: "20"
            },
            defense: {
                type: "normal",
                lyfe: "100"
            }        
        });    
    expect(response.status).toBe(200);
    });
})

describe("Attack negative", ()=>{
    it("Return 422", async()=>{
        const response = await  request(app).post("/api/v1/Attack")
        .send({
            attack: {
                type: "flying",
                lyfe: "100",
                power: "-20"
            },
            defense: {
                type: "normal",
                lyfe: "100"
            }
        });    
        expect(response.status).toBe(422);
    });
})

describe("Attack Wrong Type", ()=>{
    it("Return 422", async()=>{
        const response = await  request(app).post("/api/v1/Attack")
        .send({
            attack: {
                type: "normal",
                lyfe: "100",
                power: "20"
            },
            defense: {
                type: "flying",
                lyfe: "100"
            }
        });    
        expect(response.status).toBe(422);
    });
})