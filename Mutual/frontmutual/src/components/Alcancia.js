import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container,Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Alcancia() {
  const classes = useStyles();

  const [cincuenta,setCincuenta]=useState('')
  const [cien,setCien]=useState('')
  const [docientos,setDocientos]=useState('')
  const [quinientos,setQuinientos]=useState('')
  const [mil,setMil]=useState('')

  const [alcancia,setAlcancia]=useState([])

  const handleClick=(e) => {
      e.preventDefault()
      const alcancia={cincuenta,cien,docientos,quinientos,mil}
      console.log(alcancia)

      fetch('http://localhost:8080/alcancia/add',{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(alcancia)
      }).then(()=>{
          console.log("se agregaron monedas a la alcancia")
      })

  }

  useEffect(()=>{
    fetch('http://localhost:8080/alcancia/getAlcancia')
    .then(response=>response.json())
    .then((resultado)=>{
        setAlcancia(resultado);
    })
    
    })


let totalCincuenta=0;
let totalCien=0;
let totalDocientos=0;
let totalQuinientos=0;
let totalMil=0;

alcancia.map((alcancia)=>(
    totalCincuenta=(totalCincuenta+alcancia.cincuenta)
))
alcancia.map((alcancia)=>(
    totalCien=(totalCien+alcancia.cien)
))
alcancia.map((alcancia)=>(
    totalDocientos=(totalDocientos+alcancia.docientos)
))
alcancia.map((alcancia)=>(
    totalQuinientos=(totalQuinientos+alcancia.quinientos)
))
alcancia.map((alcancia)=>(
    totalMil=(totalMil+alcancia.mil)
))

let total=totalCincuenta+totalCien+totalDocientos+totalQuinientos+totalMil;
let totalDinero=totalCincuenta*50+totalCien*100+totalDocientos*200+totalQuinientos*500+totalMil*1000;

  return (
      <Container>

          <h1>Agregar monedas</h1>
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Monedas de 50" variant="outlined" min="0" type="number" value={cincuenta} onChange={(e)=>setCincuenta(e.target.value)} />
      <TextField id="outlined-basic" label="Monedas de 100" variant="outlined" min="0"type="number" value={cien} onChange={(e)=>setCien(e.target.value)} />
      <TextField id="outlined-basic" label="Monedas de 200" variant="outlined" min="0"type="number" value={docientos} onChange={(e)=>setDocientos(e.target.value)}/>
      <TextField id="outlined-basic" label="Monedas de 500" variant="outlined" min="0"type="number" value={quinientos} onChange={(e)=>setQuinientos(e.target.value)}/>
      <TextField id="outlined-basic" label="Monedas de 1000" variant="outlined" min="0"type="number" value={mil} onChange={(e)=>setMil(e.target.value)}/>

      
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Almacenar
      </Button>

    </form>


        
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Ahorro No.</TableCell>
                  <TableCell align="right">Moneda2 de 50</TableCell>
                  <TableCell align="right">Monedas de 100</TableCell>
                  <TableCell align="right">Monedas de 200</TableCell>
                  <TableCell align="right">Monedas de 500</TableCell>
                  <TableCell align="right">Monedas de 1000</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alcancia.map((alcancia) => (
                  <TableRow key={alcancia.id}>
                    <TableCell component="th" scope="row">
                      {alcancia.id}
                    </TableCell>
                    <TableCell align="right">{alcancia.cincuenta}</TableCell>
                    <TableCell align="right">{alcancia.cien}</TableCell>
                    <TableCell align="right">{alcancia.docientos}</TableCell>
                    <TableCell align="right">{alcancia.quinientos}</TableCell>
                    <TableCell align="right">{alcancia.mil}</TableCell>
                  </TableRow>
                ))}
                 <TableCell>TOTAL MONEDAS</TableCell>
                  <TableCell align="right">{totalCincuenta}</TableCell>
                  <TableCell align="right">{totalCien}</TableCell>
                  <TableCell align="right">{totalDocientos}</TableCell>
                  <TableCell align="right">{totalQuinientos}</TableCell>
                  <TableCell align="right">{totalMil}</TableCell>
                  <TableRow>
                  <TableCell>TOTAL DINERO POR MONEDAS</TableCell>
                  <TableCell align="right">&nbsp;${totalCincuenta*50}</TableCell>
                  <TableCell align="right">&nbsp;${totalCien*100}</TableCell>
                  <TableCell align="right">&nbsp;${totalDocientos*200}</TableCell>
                  <TableCell align="right">&nbsp;${totalQuinientos*500}</TableCell>
                  <TableCell align="right">&nbsp;${totalMil*1000}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>TOTAL DINERO Y MONEDAS</TableCell>
                  <TableCell align="right">&nbsp;${totalDinero}</TableCell>
                  <TableCell align="right">&nbsp;{total}</TableCell>
                 
                  </TableRow>
                  
              </TableBody>
            </Table>
          </TableContainer>



            

        


    </Container>
  );
}
