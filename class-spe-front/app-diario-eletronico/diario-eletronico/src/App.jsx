import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "./components/form";
import Table from "./components/table";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const client = new QueryClient();

function App() {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  function clearState() {
    setFormData({
      id: "",
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    });
  }

  return (
    <QueryClientProvider client={client}>
      <div className="min-h-[100vh] bg-stone-100 p-5">
        <h1 className="text-black text-3xl font-bold mx-8 my-8">
          Diário Eletrônico
        </h1>
        {/* <div className="flex justify-between items-center"> */}

        <Form
          formData={formData}
          setFormData={setFormData}
          clearState={clearState}
        />

        <Table formData={formData} setFormData={setFormData} />
        <ToastContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
