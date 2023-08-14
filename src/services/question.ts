export interface IAnswer {
  text: string;
  type: string;
}

export const askQuestion = async (question: string) : Promise<IAnswer> => {
  const raw = JSON.stringify({
    text: question,
  });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0NjhhMWMyYWYzNTRjOGM4NDc0OTgwYjM5ZDdhNTZhIiwidHlwIjoiSldUIn0.eyJqdGkiOiJPaDhZSER5NkwxQmZWZkE2QUhCOEtkTkhjN2ciLCJpc3MiOiJodHRwczovL29hdXRoLmRldmVsb3AudGVrb2FwaXMubmV0Iiwic3ViIjoiZDI2MTcyOTZiMWEwNDFhOTk5NGI4NjMwMWRjMzE0ZjgiLCJhdWQiOiI4NmY4MThiNmZiZWI0NjE5OTRhYTc2ZTdkNmI1OWJmOSIsImlhdCI6MTY5MjAxMTY0MywiZXhwIjoxNjkyMDE1MjQzLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIiwidGVuYW50X2lkIjoiMSJ9.QqENZdUFEv2WKkLaoJ2kQTQMVTlkRHgbS7onfD66UiGwftU2oeAB3Iy6baHqtiE3cE4Ev3VKZlYcqxR0epKKi1-y--IXN6Rs6lq45hDlV9sQGYft8obLPvOu2yj6tqTU27GM35u_KN_J00vjY12wy5cS3KinXIQTS0af06UkYM9rYflXnP_XSBJPPZ-78-4c3TTdWptbD1v10iNvK9f8x0t0GFogl3by7Jd32xQtibT_kzp4UnnTM1H4H86dZRbxUQ1jQ5_V8T2twDvXS-YDli545XXDv8a0vOgZQxVQA-CO-b3ORTahN0DZTpiFsi_FgwKvatKsctxrNLdLtin9ltM6OJWMFZOYWL04sCscMhNTwXSfipTT2Z34WkjpUIzubaH3WQhthoPJi5YQXzwMZB5c58GqF8Ku9VWXDalE_wRdlVtiPtKZig1qsLXwEUfudLP8bwjNwugF4LaCNJi3b_UGt72kawN-inMrMlQwk7XvY4ex-bC3yHDSnshmkBnsO6iUrMQ8EmOdcxmRoLFBfIGJwRzhdT1abddzmqviNipSgeX9tak9rswI_s5JMaVv_Ito4YJYH7UnX6v2tc5VElQ_dr-jRW_4_vJQdcVG6IuXV5kYYZbPqi3bS_W89lsywvyScDsDII24hXMjgkbygBRscWl24FGwZFWryEV9Kmc'
  );
  const requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
  };
  const response = await fetch(
    'http://18.233.164.43:8080/api/v1/chat',
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
