import errorPageHtml from '../src/pages/errors/522.html';

export default {
  async fetch(request) {
    try {
      const response = await fetch(request);
      if ([521, 522, 523, 524, 530].includes(response.status)) {
        return new Response(errorPageHtml, {
          status: 522,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      return response;
    } catch {
      return new Response(errorPageHtml, {
        status: 522,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
  },
};
