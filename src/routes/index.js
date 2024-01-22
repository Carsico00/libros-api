const {db} = require("../firebase");
const {Router} = require('express')

const router = Router();
router.get('/libros',async (req, res) => {
    const querySnapshot = await db.collection('libros').get()
    res.send(querySnapshot.docs.map(doc =>({
         id:doc.id,
         ...doc.data()
        }
    )))
})

router.post('/new-libro', async (req, res) => {
    const { autor, titulo, id } = req.body;
    // Handle the data as needed (e.g., store it in the database)
    // For now, let's just send back a response with the received data
    res.send({ autor, titulo, id });
    await db.collection('libros').add({
       autor,
       titulo,
        id
    })

});

router.get('/edit-libro', async (req, res) => {
    const { autor, titulo, id } = req.body;
    // Handle the data as needed (e.g., store it in the database)
    // For now, let's just send back a response with the received data
    res.send({ autor, titulo, id });

    await db.collection('libros').doc().get()

});


module.exports = router;
