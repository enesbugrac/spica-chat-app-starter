import React from "react";

function MessageInput(props: any) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex-row-center gp-2">
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        required
        minLength={1}
      />
      <button type="submit" disabled={value.length < 1}>
        Send
      </button>
    </form>
  );
}

export { MessageInput };
