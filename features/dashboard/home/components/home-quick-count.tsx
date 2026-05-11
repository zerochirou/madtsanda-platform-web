import { Card } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

export function HomeQuickCount() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <Card className="p-6 border-l-4 border-l-blue-500">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 text-lg">⚡</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">2/8 watched</p>
            <p className="text-lg font-semibold">UI/UX Design</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-l-pink-500">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-pink-600 text-lg">📋</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">3/8 watched</p>
            <p className="text-lg font-semibold">Branding</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-l-cyan-500">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
            <span className="text-cyan-600 text-lg">💻</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">6/12 watched</p>
            <p className="text-lg font-semibold">Front End</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </div>
      </Card>
    </div>
  )
}