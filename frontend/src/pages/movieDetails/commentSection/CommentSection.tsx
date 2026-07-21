import { WrapperButton, WrapperText } from "@/components/ui/atoms";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Close, Send } from "@mui/icons-material";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { FaRegFlag } from "react-icons/fa6";
import { WrapperInput } from "@/components/ui/organisms";

function CommentSection({ comments }) {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="!mt-3">
      <div className="!mb-8 !p-4 rounded-xl bg-card !border !border-[var(--border)]/50">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write down your comment... (You should be logged in)"
          className="w-full !px-4 !py-3 rounded-lg bg-[var(--secondary)] !border !border-[var(--border)]/50 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] resize-none h-24"
        />
        <div className="flex justify-end mt-3">
          <button className="!px-5 !py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium hover:bg-[var(--primary)]/90 transition-colors">
            submit
          </button>
        </div>
      </div>
      {comments.map((item: any) => {
        return <CommentItem comment={item} key={item?.id} />;
      })}
    </div>
  );
}

const REPORT_OPTIONS = ["Spoilers", "Offensive Language", "Irrelevant Context"];

const CommentItem = ({
  comment,
  depth = 0,
}: {
  comment: Comment;
  depth?: number;
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [selectedReports, setSelectedReports] = useState<string[]>([]);
  const [likes, setLikes] = useState(comment?.reactions?.like);
  const [dislikes, setDislikes] = useState(comment?.reactions?.dislike);

  const toggleReport = (opt: string) => {
    setSelectedReports((prev) =>
      prev.includes(opt) ? prev.filter((r) => r !== opt) : [...prev, opt],
    );
  };

  return (
    <div className={`${depth > 0 ? "!mx-4 !px-2" : ""}`}>
      <div className="  !pb-4">
        <div className="w-[1px] !h-[100%] bg-[var(--theme-primary-200)]/20" />
        <div>
          <div className="flex items-center gap-3 !mb-2">
            <FaRegUser className="w-8 h-8 bg-[var(--theme-primary-700)] !p-2 rounded-full" />

            <WrapperText
              text={comment.userName}
              type={{ name: "body", level: 1 }}
            />
            <WrapperText
              text={`${comment.createdDate} • ${comment.createdTime}`}
              type={{ name: "caption", level: 1 }}
              className="text-[var(--theme-primary-500)]"
            />
            <div className="flex items-center gap-2 justify-start !mx-3">
              <WrapperButton
                variant="black"
                type="text"
                size="small"
                onClick={() => setLikes((l) => l + 1)}
                className="flex !p-0 items-center gap-1 !text-[var(--theme-success-300)] hover:!text-[var(--theme-success-500)] transition-colors"
              >
                <GoThumbsup className="w-4 h-4" /> {likes}
              </WrapperButton>
              <WrapperButton
                variant="black"
                type="text"
                size="small"
                onClick={() => setDislikes((d) => d + 1)}
                className="flex !p-0 items-center gap-1 !text-[var(--theme-error-300)] hover:!text-[var(--primary)] transition-colors"
              >
                <GoThumbsdown className="w-4 h-4" /> {dislikes}
              </WrapperButton>
            </div>
          </div>

          <WrapperText
            text={comment.commentText}
            type={{ name: "body", level: 1 }}
            className="font-extralight"
          />

          <div className="flex items-center gap-4 !mt-2">
            <WrapperButton
              variant="black"
              type="text"
              size="small"
              text="Reply"
              onClick={() => setShowReplyInput(!showReplyInput)}
              className={`flex items-center gap-1 !text-[var(--muted-foreground)] hover:!text-[var(--primary)] transition-colors${showReplyInput ? " !text-[var(--primary)]/80" : " !text-[var(--muted-foreground)]"}`}
            >
              <LuMessageCircle className="w-3.5 h-3.5" />
            </WrapperButton>
            <WrapperButton
              variant="black"
              type="text"
              size="small"
              text="Report"
              onClick={() => setShowReport(!showReport)}
              className={`flex items-center gap-1 hover:!text-[var(--destructive)] transition-colors ${showReport ? " !text-[var(--destructive)]" : " !text-[var(--muted-foreground)]"}`}
            >
              <FaRegFlag className="w-3.5 h-3.5" />
            </WrapperButton>
            {comment?.replies?.length > 0 && (
              <WrapperButton
                variant="black"
                type="text"
                size="small"
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center gap-1 !text-[var(--primary)] hover:!text-[var(--primary)]/80 transition-colors font-medium"
              >
                {showReplies
                  ? "Close Replies"
                  : `Show ${comment.replies.length} Replies`}
              </WrapperButton>
            )}
          </div>

          <div
            className={`z-1 overflow-hidden transition-all duration-500 ease-in-out
            ${showReport ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            {
              <div className="!mt-3 !p-3 rounded-lg bg-[var(--card)] !border !border-[var(--border)]/50 animate-slide-in">
                <WrapperText
                  text="Report Options:"
                  type={{ name: "body", level: 3 }}
                  className="font-extralight text-[var(--muted-foreground)] "
                />
                <div className="flex flex-wrap gap-2 !my-3">
                  {REPORT_OPTIONS.map((opt) => (
                    <WrapperButton
                      key={opt}
                      variant="black"
                      type="text"
                      text={opt}
                      size="small"
                      onClick={() => toggleReport(opt)}
                      className={`!px-3 !py-1 rounded-full text-xs transition-colors ${
                        selectedReports.includes(opt)
                          ? "bg-[var(--primary)] !text-[var(--primary-foreground)]"
                          : "bg-[var(--secondary)] !text-[var(--secondary-foreground)] hover:!bg-[var(--secondary)]/80"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <WrapperButton
                    type="text"
                    text="Submit"
                    size="small"
                    onClick={() => {
                      setShowReport(false);
                      setSelectedReports([]);
                    }}
                    className="!px-3 !py-1 text-xs rounded-lg bg-[var(--primary)] !text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
                  />
                  <WrapperButton
                    type="text"
                    text="Cancel"
                    size="small"
                    onClick={() => setShowReport(false)}
                    className="!px-3 !py-1 text-xs rounded-lg bg-[var(--secondary)] !text-[var(--secondary-foreground)]"
                  />
                </div>
              </div>
            }
          </div>

          <div
            className={`z-1 overflow-hidden transition-all duration-500 ease-in-out
            ${showReplyInput ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="!mt-3 gap-2 animate-slide-in">
              <WrapperInput
                name="Reply"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write Your Message..."
                className="w-full flex-1 !px-3 !py-2 rounded-lg bg-[var(--secondary)] !border !border-[var(--border)]/50 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none "
              />
              <div className="flex gap-2 justify-end">
                <WrapperButton className="!px-3 !py-2 rounded-lg !bg-[var(--primary)] !text-[var(--primary-foreground)] hover:!bg-[var(--primary)]/90">
                  <Send className="w-4 h-4" />
                </WrapperButton>
                <WrapperButton
                  onClick={() => setShowReplyInput(false)}
                  className="!px-3 !py-2 rounded-lg !bg-[var(--secondary)] !text-[var(--secondary-foreground)]"
                >
                  <Close className="w-4 h-4" />
                </WrapperButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-1 overflow-hidden transition-all duration-500 ease-in-out
        ${showReplies ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {comment?.replies?.map((reply) => (
          <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
