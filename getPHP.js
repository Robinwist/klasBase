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
    request.open("GET",this.dataRequestID,false)

    request.send();

    this.requestResponse = request.responseText;
}


var getUsers = new dataRequest("COL 1")

    console.log(getUsers.requestResponse)


