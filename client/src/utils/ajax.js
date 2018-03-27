export const xhrGetPromise = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

export const xhrDeletePromise = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

export const xhrPutPromise = (url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(data));
  });
};