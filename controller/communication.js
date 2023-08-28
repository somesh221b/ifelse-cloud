const communicationFun=async(req,res)=>{
    try{
        if(req.headers['x-sender']=='earth'){
            list=[{a:2},{b:22},{c:222},{d:3},{e:33},{f:333},{g:4},{h:44},{i:444},{j:5},{k:55},{l:555},{m:6},{n:66},{o:666},{p:7},{q:77},{r:777},{s:7777},{t:8},{u:88},{v:888},{w:9},{x:99},{y:999},{z:9999},{' ':' '}]
        n=req.params.message
        n=n.split('')
        last=0
        encode=''
        n.forEach(x=>{
            let v=list.find(ob=>ob[`${x}`])
            if (last==v[x].toString().split('')[0]){
                encode+='.'+v[x].toString()
            }else{
                encode+=v[x].toString()
            }
            last=v[x].toString().split('')[0]
        })
            res.send({
                'Message from Earth':req.params.message,
                'Nokia Translation':encode
            })
        }else{
            const dictionary = {
                2: 'a', 22: 'b', 222: 'c',
                3: 'd', 33: 'e', 333: 'f',
                4: 'g', 44: 'h', 444: 'i',
                5: 'j', 55: 'k', 555: 'l',
                6: 'm', 66: 'n', 666: 'o',
                7: 'p', 77: 'q', 777: 'r', 7777: 's',
                8: 't', 88: 'u', 888: 'v',
                9: 'w', 99: 'x', 999: 'y', 9999: 'z',
                ' ': ' '
            };
            full=[]
            encode=req.params.message.split(" ");
            encode.forEach((x,m)=>{
                x=x.split('.')
                last=0
                x.map((y,n)=>{
                    y=y.split('')
                    last=y[0]
                    series=[]
                    val=''
                    y.forEach((z,i)=>{
                        if(last==z){
                            val+=z
                            
                        }else{
                            series.push(val)
                            last=z
                            val=z
                        }
                        if(y.length==i+1){
                                series.push(val)
                            }
                    })
                    full.push(series)
                    if(n+1==x.length){
                        full.push([' '])
                    }
                    
                })
            })
            console.log(full.flat(2))
            str=''
            full=full.flat(2).forEach(x=>{
                str+=dictionary[x]
            });
            
            res.send({
                'Message from mars':req.params.message,
                'Nokia Translation':str
            }) 
        }

    }catch(e){
        res.send({"error":e.message})
    }
}
module.exports={communicationFun};




