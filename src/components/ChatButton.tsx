import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import { useConversation } from "@11labs/react"
import { useToast } from "./ui/use-toast"

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const conversation = useConversation({
    onError: (error: { message?: string }) => {
      toast({
        title: "Error",
        description: error.message || "An unknown error occurred",
        variant: "destructive",
      })
    },
  })

  const handleStartChat = async () => {
    try {
      // Replace with your actual agent ID from ElevenLabs
      await conversation.startSession({
        agentId: "your-agent-id-here"
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to start chat session",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg border-2 border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat Support</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Button onClick={handleStartChat}>
            Start Voice Chat
          </Button>
          {/* Add text chat interface here */}
        </div>
      </DialogContent>
    </Dialog>
  )
}