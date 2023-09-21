const apiCont={
    greet(req,res){
        res.send('Hello Server!');
    },
    newpro(req,res){
        res.json({ message: 'Request created successfully' });
    }
};
module.exports=apiCont;