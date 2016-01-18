function dataRequest(collumn, Gid){
    this.Gid = Gid || "none";
    this.collumn  = collumn || "none";
    this.request = new XMLHttpRequest();

    if(this.Gid == "none" && this.collumn == "none"){

        this.dataRequestID = "getDB.php"

    }else if(this.Gid != "none"){

        this.dataRequestID = "getDB.php?id=" + this.Gid;

    }else if(this.Gid == "none" && this.collumn != "none"){

        this.dataRequestID = "getDB.php?collumn=" + this.collumn;

    }else if(this.Gid != "none" && this.collumn != "none"){

        this.dataRequestID = "getDB.php?id=" + this.Gid + "&collumn=" + this.collumn;

    }
    this.request.open("GET",this.dataRequestID,true)

    this.request.send();

    this.requestResponse = this.request.responseText;
}


var getUsers = new dataRequest("firstname")

    console.log(getUsers.requestResponse)


