const {describe,it} = require("mocha");
const app = require ('../server');
const request = require("supertest");
const {expect} = require('chai');

const createPostRequest = (title, content) => {
    return request(app)
        .post('/notes')
        .send({ title, content });
};

describe('GET /notes', ()=> {

    it('should return all notes123',async () =>{

        console.log(request);
        const response = await request(app).get('/notes');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');

    });

    it('should return 404 for non existing id', async ()=>{
        console.log(request);
        const response = await request(app).get('/notes/123');
        expect(response.status).to.equal(404);

    });

      it('test create new note', async () => {
        const response = await request(app)
            .post('/notes')
            .send({ title: 'task1', content: 'this is a note' });
        expect(response.status).to.equal(201);

    });

     it("Test for successful POST /notes", async () => {
    const response = await createPostRequest("Test", "Hello");

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("id");
    expect(response.body.title).to.equal("Test");
    expect(response.body.content).to.equal("Hello");
    expect(response.body).to.have.property("createdAt");
    expect(response.body).to.have.property("day");
        });

    it('test successful deletetion', async() => {
        const saveResponse = await request(app).post('/notes/').send({'title':'second task', 'content':'Learning node.js'});
        const response = await request(app).delete('/notes/'+saveResponse.body.id);
        expect(response.status).to.equal(200);
    })

    it("Test for POST /notes with no title", async () => {
    const response = await request(app)
      .post("/notes")
      .send({ content: "Content" });

    expect(response.status).to.equal(400);
  });

    it("Test for POST /notes with numeric title", async () => {
    const response = await createPostRequest(1, "Task Content");
    expect(response.status).to.equal(400);
  });

})

