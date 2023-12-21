import { Badge } from "@/components/ui/badge";

import FormEthereum from "@/components/form-ethereum";
import ResentTransactions from "@/components/resent-transactions";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-center gap-3">
      <div className="text-white flex items-center gap-1">
        <span>Ethereum</span>
        <Badge>ETH</Badge>
      </div>
      <FormEthereum />
      <ResentTransactions />
    </main>
  );
}
