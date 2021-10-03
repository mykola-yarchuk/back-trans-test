import { createServer } from '@/createServer';

async function main() {
  const port = process.env.PORT;
  const { app } = await createServer();

  app.listen(port, () => {
    console.log(`HTTP server available on http://localhost:${port}/`);
  });
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
