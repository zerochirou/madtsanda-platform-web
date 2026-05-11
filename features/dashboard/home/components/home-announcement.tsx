import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HomeAnnouncement() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Your mentor</h3>
        <button className="text-gray-400 hover:text-gray-600">+</button>
      </div>

      <div className="space-y-4">
        {/* Mentor 1 */}
        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">Padhang Satrio</p>
              <p className="text-xs text-gray-500">Mentor</p>
            </div>
          </div>
          <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 text-xs h-8 px-3">
            Follow
          </Button>
        </div>

        {/* Mentor 2 */}
        <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback>ZH</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">Zakir Horizontal</p>
              <p className="text-xs text-gray-500">Mentor</p>
            </div>
          </div>
          <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 text-xs h-8 px-3">
            Follow
          </Button>
        </div>

        {/* Mentor 3 */}
        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback>LS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">Leonardo Samsul</p>
              <p className="text-xs text-gray-500">Mentor</p>
            </div>
          </div>
          <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 text-xs h-8 px-3">
            Follow
          </Button>
        </div>
      </div>

      <Button className="w-full mt-6 text-blue-600 font-semibold">
        See All
      </Button>
    </Card>
  )
}