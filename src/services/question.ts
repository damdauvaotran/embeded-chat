export interface IAnswer {
  text: string;
  type: string;
}

export const askQuestion = async (question: string): Promise<IAnswer> => {
  const raw = JSON.stringify({
    text: question,
  });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
  };
  const response = await fetch(
    'http://chat.api.mottrieuangi.com:8080/api/v1/chat',
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export interface ICreateTicketRequest {
  supportType: string;
  description: string;
  customerEmail: string;
  attachmentUrls?: string[];
}

export interface ICreateTicketResponse {
  key: string;
}

export const createTicket = async (
  body: ICreateTicketRequest
): Promise<ICreateTicketResponse> => {
  const raw = JSON.stringify({
    attachment_urls: [
      'https://media.istockphoto.com/id/1468192804/vi/anh/kh%C3%A1i-ni%E1%BB%87m-t%E1%BA%A1o-ra-h%C3%ACnh-%E1%BA%A3nh-th%E1%BB%B1c-t%E1%BA%BF-b%E1%BA%B1ng-ph%E1%BA%A7n-m%E1%BB%81m-ai.jpg',
      'https://media.istockphoto.com/id/1468192804/vi/anh/kh%C3%A1i-ni%E1%BB%87m-t%E1%BA%A1o-ra-h%C3%ACnh-%E1%BA%A3nh-th%E1%BB%B1c-t%E1%BA%BF-b%E1%BA%B1ng-ph%E1%BA%A7n-m%E1%BB%81m-ai.jpg',
    ],
    ...body,
  });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
  };
  const response = await fetch(
    'http://chat.api.mottrieuangi.com:8080/api/v1/tickets',
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
