"use client";
import BottomFixedButton, {
  Button,
} from "@/app/(_components)/bottom-fixed-button";
import BottomSheet from "@/app/(_components)/bottom-sheet";
import FundingStatus from "@/app/(_components)/funding-status";
import Loading from "@/app/loading";
import { API_ENDPOINTS, BASE_URL, PAYMENT_BASE_URL } from "@/config/api";
import { useGetFundingDetail } from "@/hooks/api/useGetFundingDetail";
import { usePostFunding } from "@/hooks/api/usePostFunding";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { FundingDetailType } from "@/types/api/funding";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
  id: string;
}

export default function FundingDetail({ id }: Props) {
  const [isOpen, setOpen] = useState(false);
  const priceRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  const router = useRouter();

  const { data, isLoading } = useGetFundingDetail(id);
  const { mutateAsync } = usePostFunding();

  // orderId 확인 및 처리
  useEffect(() => {
    const orderId = searchParams.get("orderId");
    if (orderId) {
      checkDonation(orderId);
    }
  }, [searchParams]);

  const checkDonation = async (orderId: string) => {
    try {
      await fetchClient(
        `${API_ENDPOINTS.FUNDING}/my-funding/callback?orderId=${orderId}`
      );
      window.showToast("따뜻한 마음에 감사드립니다", "success");
      setTimeout(() => {
        router.replace(`${PATH.FUNDING_LIST}/${id}`);
      }, 3000);
    } catch (error) {
      console.error("기부 확인 실패:", error);
    }
  };

  if (isLoading) return <Loading />;

  const {
    fundingId,
    image,
    title,
    content,
    percent,
    curAmount,
    targetAmount,
    // organizationId,
    organizationName,
  } = data as FundingDetailType;

  const handleDonation = async () => {
    if (!priceRef.current || !priceRef.current.value) return;

    await mutateAsync({
      fundingId,
      price: Number(priceRef.current.value),
      redirectUri: `${BASE_URL}${PATH.FUNDING_LIST}/${fundingId}`,
    }).then((token) => {
      if (token) redirect(`${PAYMENT_BASE_URL}/payment?token=${token}`);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-2 sm:p-4 mb-20 ">
        <div className="flex flex-col gap-5">
          <div className="relative mt-5">
            <img
              src={image}
              className="w-full aspect-[2/1.2] rounded-xl object-cover"
            />
            {/* {like.isLiked ? (
      <button className="absolute right-4 top-4">
        <img
          src="/icons/like-fill.svg"
          className="w-6  aspect-square"
        />
      </button>
    ) : (
      <button className="absolute right-4 top-4">
        <img
          src="/icons/like-line.svg"
          className="w-6  aspect-square"
        />
      </button>
    )} */}
          </div>
          <div>
            <div>
              <span className="text-bd3 sm:text-bd2 text-shadow-500">
                {organizationName}
              </span>
              <h1 className="text-t2 break-keep">{title}</h1>
            </div>
            <FundingStatus
              percent={percent}
              rightTop={<div className="text-accent-red">{percent}%</div>}
              leftBottom={`목표금액: ${targetAmount.toLocaleString()}원`}
              rightBottom={`${curAmount.toLocaleString()}원`}
            />
          </div>
        </div>
        <div className="text-bd1 max-md:text-bd2 whitespace-pre-wrap break-word flex flex-col gap-6">
          {content.split("\n").map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <BottomFixedButton onClick={() => setOpen(true)}>
        기부하기
      </BottomFixedButton>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} snapPoints={[300]}>
        <div className="h-full flex flex-col justify-between">
          <label htmlFor="funding_amount" className="text-t3">
            기부 금액
          </label>
          <div className="flex gap-2 items-center ">
            <input
              id="funding_amount"
              type="number"
              ref={priceRef}
              className="flex-1 outline-0 text-bd1 bg-transparent border-b border-shadow-600 focus:border-accent-green text-center tracking-wide"
            />
            <span>원</span>
          </div>
          <Button onClick={handleDonation}>확인</Button>
        </div>
      </BottomSheet>
    </>
  );
}
