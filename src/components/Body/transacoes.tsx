import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Conta } from "../../models/Conta";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Transferencia } from "../../models/Transferencia";
import { BASE_URL } from "../../utils/request";

function Transacoes() {
  const [idConta, setIdConta] = useState("");
  const [conta, setConta] = useState<Conta>({ id: "", nomeResponsavel: "" });
  const [msg, setMsg] = useState("");

  const min = new Date();
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  const [nomeOp, setNomeOp] = useState("");

  const [totalConta, setTotalConta] = useState(0.0);
  let total = 0;
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
  for (const transf of transferencias) {
    total += transf.valor;
  }

  var dmin = "";
  var dmax = "";  
  if(minDate!=null){
  dmin = minDate.toISOString().slice(0,10)
  }  
  if(maxDate!=null){
    dmax = maxDate.toISOString().slice(0,10)
  }

  function handleClick() {
    if (idConta != "") {
      
      axios(`${BASE_URL}/contas/${idConta}`).then((response) => {
        setConta(response.data);
      });
      axios
        .get(`${BASE_URL}/transferencias/${idConta}/total-valores`)
        .then((response) => {
          setTotalConta(response.data);
        });
      axios
      .get(`${BASE_URL}/transferencias/${idConta}?minDate=${dmin}&maxDate=${dmax}&nomeOp=${nomeOp}`)
      .then(response => {
        setTransferencias(response.data)
      })

    } else {
      setMsg("Digite um id válido");
    }
  }

  return (
    <div className="main-card" translate="no">
      <h2 className="main-title">Transações</h2>
      <div className="card-principal">
        <div className="campos-principais">
          <div className="nomes-campos">Id / nº da Conta</div>
          <div>
            <input
              className="id-field"
              type="text"
              onChange={(e) => setIdConta(e.target.value)}
              onFocus={(e) => {
                (conta.nomeResponsavel = ""), setMsg("");
              }}
            ></input>
          </div>
        </div>
        <div className="campos-principais">
          <div className="nome-titular">{conta.nomeResponsavel}</div>
        </div>
      </div>
      <div className="msg">{msg}</div>

      <div className="card-transacoes">
        <div className="campos">
          <div className="nomes-campos">Data de Início</div>
          <div className="form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="campos">
          <div className="nomes-campos">Data de Fim</div>
          <div className="form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="campos">
          <div className="nomes-campos">Nome Operador da Transação</div>
          <div>
            <input
              className="id-nomeOp"
              type="text"
              onChange={(e) => setNomeOp(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="red-btn-container">
          <div className="red-btn" onClick={() => handleClick()}>
            Buscar
          </div>
        </div>
      </div>
        <div className="card-transacoes">
            <div className="campos">
                <div className="nomes-campos">Saldo Total</div>
                <div className="id-saldo">R$ {totalConta}</div>
            </div>
            <div className="campos">
                <div className="nomes-campos">Saldo no Período</div>
                <div className="id-saldo">R$ {total}</div>
            </div>
        </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Transação</th>
              <th>Operador da Transação</th>
            </tr>
          </thead>
          <tbody>
            {transferencias.map ((transferencia) => {
              return (
                <tr key={transferencia.id}>
                  <td>{transferencia.id}</td>
                  <td>{transferencia.dataTransferencia}</td>
                  <td>R$ {transferencia.valor.toFixed(2)}</td>
                  <td>{transferencia.tipoTransferencia}</td>
                  <td>{transferencia.nomeOperadorTransacao}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transacoes;
