export default function Loading() {
  return (
    <div className='flex items-center gap-4 justify-center w-full h-dvh bg-white text-9xl font-black text-base-200'>
      <span className='animate-[loadingEffect_1s_linear_infinite]'>.</span>
      <span className='animate-[loadingEffect_1s_linear_infinite] [animation-delay:200ms]'>
        .
      </span>
      <span className='animate-[loadingEffect_1s_linear_infinite] [animation-delay:400ms]'>
        .
      </span>
    </div>
  );
}
