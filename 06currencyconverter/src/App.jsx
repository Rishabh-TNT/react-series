import { useState } from "react";
import "./App.css";
import InputBox from "./InputBox";
import useCurrencyInfo from "./customhooks/usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const data = useCurrencyInfo(from);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/35115180/pexels-photo-35115180.jpeg")',
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Object.keys(data)}
                onAmountChange={(newAmount) => setAmount(newAmount)}
                selectCurrency={from}
                onCurrencyChange={(newCurrency) => setFrom(newCurrency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                  setConvertedAmount(amount);
                  setAmount(convertedAmount);
                }}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={Object.keys(data)}
                selectCurrency={to}
                amountDisabled={true}
                onAmountChange={(newAmount) => setConvertedAmount(newAmount)}
                onCurrencyChange={(newCurrency) => setTo(newCurrency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={() => setConvertedAmount(amount * data[to])}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
