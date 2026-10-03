import { useState } from 'react'


function App() {
  const [ peso, setPeso] = useState ('')
  const [ altura, setAltura] = useState ('')
  const [ resultado, setResultado] = useState ('')
  
  
  function Calcular() {
    const pesoNum = Number(peso);
    const alturaNum = Number(altura);
    const realizarConta = pesoNum / (alturaNum * alturaNum);
    
    if ( pesoNum <= 0 || alturaNum <= 0){
      
      setResultado('dados inválidos');
      
    } else{

      let classificacao = '';

    if (realizarConta < 18.5) {
      classificacao = 'abaixo do peso'
      
    }

    else if (realizarConta < 25) {
      classificacao = 'Peso normal'
    }

    else if (realizarConta < 30){
      classificacao = 'sobrepeso'
    }

    else if (realizarConta < 35){
      classificacao = 'obesidade Grau I'
    }

    else if (realizarConta < 40){
      classificacao = 'obesidade Grau II'
    }

    else{
      classificacao = 'obesidade Grau III'
    }

    setResultado( "Seu IMC é de " + realizarConta.toFixed(2)+' '+ '-' + '  ' + classificacao);
  }
  
}

  return (
    <div className='container'>
      <div className='row justify-content-center min-vh-100 d-flex align-items-center'>
        <div className='col-md-6'>
          <div className='card mt-5'>
            <div className='card-body'>

            <h1 className='mt-2 text-center mb-3'> Calcular IMC </h1>
            {/* input do peso */}
            <input type="number" className='form-control mb-2' placeholder='Seu Peso'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}/>

            {/* input da altura */}
            <input type="number" className=' form-control' placeholder='Sua altura (ex: 1,70)'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}/>

            <button className='btn btn-primary mt-2 w-100 text-center' onClick={Calcular}>Enviar</button>
            <p className='mt-3 fs-5 fw-bold text-center'>{resultado}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
    

}

export default App
