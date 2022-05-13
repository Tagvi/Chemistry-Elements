export async function fetchData<Tdata extends Object = Object>(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data: Tdata = await response.json();
    return data;
  }
  throw new Error(`Server responded with a status code of ${response.status}`);
}
