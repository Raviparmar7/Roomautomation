const roomcontroller = require('../controller/roomcontroller');

const router = require('express').Router(); 


    router.get('/listroom',roomcontroller.listroom);
    router.post('/addroom',roomcontroller.addroom);
    router.post('/adddevice',roomcontroller.adddevice);
    router.get('/listdevice',roomcontroller.listdevice);
    router.post('/modifydevice',roomcontroller.modifydevice);
    router.post('/deletedevice',roomcontroller.deletedevice);
    router.post('/adddevicetoroom',roomcontroller.addedevicetoroom);
    router.post('/removedevicefromroom',roomcontroller.removedevicefromroom);
module.exports = router;


