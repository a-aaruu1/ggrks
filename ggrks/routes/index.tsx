import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>ggrks</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <h1>https://mei.deno.dev/[ググらせたい内容]</h1>
        <p>空白は+です。</p>
        <p>by a_aaruu / <a href="https://www.burgerking.co.jp">@BK</a></p>
      </div>
    </>
  );
}
