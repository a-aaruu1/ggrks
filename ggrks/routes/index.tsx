import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>めーぷる</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <h1>https://mei.deno.dev/[検索内容]</h1>
        <p>by めーぷる / <a href="http://clublog.club-t.com/_ct/17331164">めーぷるとは？[Click]</a></p>
      </div>
    </>
  );
}
