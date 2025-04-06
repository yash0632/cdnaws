import { UserIcon, TrashIcon } from '@heroicons/react/16/solid'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'

export default function SinglePost({className,post,postActions}: {post: any, postActions: any,className:string}) {
    const {id,caption,imageUrl,totalLikes,totalComments} = post;
    const{likeClicked,commentClicked,editPostClicked,deletePostClicked} = postActions;

    return (
        <div className={className + ' outline-1'} style={{width:650}}>
    
          <div className="flex flex-col space-y-2">
    
          <div className="flex flex-row items-center space-x-4 cursor-pointer active:opacity-80">
            <UserIcon className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
            <p className="text-lg  hover:underline">username</p>
          </div>
    
            <p className="text-base">{caption}</p>
    
            <div className="flex flex-row items-end space-x-4 justify-center">
    
    
              <img className="rounded" width="430" height="768" src={imageUrl}></img>
    
              {/* Actions */}
              <div className='flex flex-col space-y-4'>
                <div className='flex flex-col items-center' onClick={() => likeClicked({id})}>
                  <HeartOutline className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
                  <p>{totalLikes}</p>
                </div>
                <div className='flex flex-col items-center' onClick={() => commentClicked({id})}>
                  <ChatIcon className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
                  <p>{totalComments}</p>
                </div>
    
                <div className='flex flex-col items-center' onClick={() => deletePostClicked({id})}>
                  <TrashIcon className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
                </div>
              </div>          
            </div>
    
          </div>
        </div>
      )
}

function ChatIcon({className}:{className:string}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

    )
}