const roommodel = require("../model/room");
const devicemodel = require("../model/device");



module.exports ={
    
listroom :async function(req,res,next) {
  let roomdetail =await roommodel.find();
  res.json(roomdetail)
},
addroom :async function(req,res,next) {
    console.log(req.body)
    roomid = req.body.roomid;
    roomname = req.body.roomname;
    devicelist = req.body.devicelist;
      let roomdetail =new roommodel()
      roomdetail.roomid = roomid;
      roomdetail.roomname = roomname;
      roomdetail.devicelist = devicelist;
      await roomdetail.save();
      res.json(roomdetail)  
    },

    listdevice :async function(req,res,next) {
        let roomdetail =await devicemodel.find();
        res.json(roomdetail)
      },
    adddevice:async function(req,res,next) {
    console.log(req.body)
    deviceid = req.body.deviceid;
    devicename = req.body.devicename;
      let devicedetail =new devicemodel()
      devicedetail.deviceid = deviceid;
  

      devicedetail.devicename = devicename;
      await devicedetail.save();
      res.json(devicedetail)  
    },

    modifydevice:async function(req,res,next) {
        console.log(req.body)
        modifyid = req.body.modifyid;
        modifyname = req.body.modifyname;
          let devicedetail =await devicemodel.findOne({deviceid:modifyid});
          devicedetail.devicename = modifyname;
          await devicedetail.save();
          res.json(devicedetail)  
        },

        deletedevice:async function(req,res,next) {
            console.log(req.body)
            deleteid = req.body.deleteid;
              let devicedetail =await devicemodel.findOne({deviceid:deleteid}).remove().exec();;
            
            
              res.json(devicedetail)  
            },

            addedevicetoroom:async function(req,res,next) {
                console.log(req.body)
                deviceid = req.body.deviceid;
                devicename = req.body.devicename;
                roomid = req.body.roomid;

                  let roomdetail =await roommodel.findOne({roomid: roomid});
                  if(roomdetail.devicelist.indexOf(deviceid) == -1){

                  roomdetail.devicelist.push(deviceid)
                  let devicedetail = new devicemodel()
                  devicedetail.deviceid = deviceid;
                  devicedetail.devicename = devicename;
                  await roomdetail.save()
                  await devicedetail.save()
                  }
                 
                  
                 
                  res.json({success:true})  
                },

                removedevicefromroom:async function(req,res,next) {
                    console.log(req.body)
                    removeid = req.body.removeid;
                   
                    roomid = req.body.roomid;
    
                      let roomdetail =await roommodel.findOne({roomid: roomid});
                      console.log(roomdetail.devicelist.indexOf(removeid))
                      if(roomdetail.devicelist.indexOf(removeid) != -1){
                      console.log("here")
                       index= roomdetail.devicelist.indexOf(removeid)
                       roomdetail.devicelist.splice(index, 1);
                       console.log(roomdetail.devicelist)
                      
                    
                      await roomdetail.save()
              
                      }
                     
                      
                     
                      res.json({success:true})  
                    }
    
}
