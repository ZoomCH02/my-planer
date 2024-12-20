import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypePomodoroRoundFormState } from '@/types/pomodoro.types'

import { pomodoroService } from '@/services/pomodoro.service'

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update round'],
		mutationFn: ({ id, data }: { id: string; data: TypePomodoroRoundFormState }) =>
			pomodoroService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		}
	})

	return { updateRound, isUpdateRoundPending }
}
