export const getData = async (rows: number) => {
  const URL = `http://www.filltext.com/?rows=${rows}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return res.json();
};
